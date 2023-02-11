import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./constants";
import Nav from "./components/Nav";
import PermissionPopup from "./components/PermissionPopup/PermissionPopup";
import { getMessagingToken } from "./utils/firebase";
import { BrowserRouter as Router } from "react-router-dom";
import api from "./api";
import classNames from "classnames";
import Icon from "./components/Icon";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

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

  const [isDarkModeEnabled, setDarkModeEnabled] = useDarkMode();

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
    <div
      className={classNames({
        dark: isDarkModeEnabled,
      })}
    >
      <button
        className="absolute top-5 right-5 rounded-md p-1 h-8 w-8 outline-none bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-100"
        onClick={() => setDarkModeEnabled((prevState) => !prevState)}
      >
        {isDarkModeEnabled ? <Icon>light_mode</Icon> : <Icon>dark_mode</Icon>}
      </button>
      <Router>
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
          <header className="h-40 flex justify-center items-center">
            <h1 className="text-3xl">
              <span className="text-gray-700 dark:text-gray-100">easy</span>
              <span className="text-red-400 dark:text-red-500">KU</span>
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
    </div>
  );
};

export default App;
