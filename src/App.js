import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./constants";
import Nav from "./components/Nav";
import PermissionPopup from "./components/PermissionPopup/PermissionPopup";
import { getMessagingToken } from "./utils/firebase";
import { BrowserRouter as Router } from "react-router-dom";
import api from "./api";

const App = () => {
  const [{ hidden, rejected }, setState] = useState({
    hidden: true,
    rejected: false,
  });

  const requestPermissionUI = () => {
    setState({ hidden: false });
  };

  const [{ data, loading }, setData] = useState({
    data: { results: [], notifications: [] },
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      const [results, notifications] = await Promise.all([
        api.fetchResults(),
        api.fetchNotifications(),
      ]);
      setData({ data: { results, notifications }, loading: false });
    };
    fetchData();
  }, []);

  const getToken = useCallback(() => {
    if (Notification.permission === "default") {
      !rejected && requestPermissionUI();
    }
  }, [requestPermissionUI]);

  const handlePermission = async () => {
    try {
      Notification.requestPermission();
      getMessagingToken();
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    setState({ rejected: true, hidden: true });
  };

  useEffect(() => {
    navigator.serviceWorker &&
      navigator.serviceWorker.ready.then(() => {
        getToken();
      });
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="header">
          <h1 className="text-3xl">
            <span className="text-gray-700">easy</span>
            <span className="text-red-400">KU</span>
          </h1>
        </header>
        <Nav />
        <Routes>
          {ROUTES.map((route, key) => {
            const Component = route.component;
            return (
              <Route
                key={key}
                path={route.path}
                exact={!!route.exact}
                element={<Component data={data} loading={loading} />}
              />
            );
          })}
          {process.env.NODE_ENV === "development" && (
            <Route path="/" element={<Navigate to="/results" replace />} />
          )}
        </Routes>
        <PermissionPopup
          hidden={hidden}
          handleYes={handlePermission}
          handleClose={handleClose}
        />
      </div>
    </Router>
  );
};

export default App;
