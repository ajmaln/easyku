import classNames from "classnames";
import React from "react";
import Button from "../Button";
import Icon from "../Icon";
import "./styles.css";

const PermissionPopup = ({ hidden, handleClose, handleYes }) => {
  return (
    <div
      className={classNames("flex flex-col popup slider transition-all duration-500 shadow-2xl border max-w-md mx-auto space-y-6 p-6", {
        "translate-y-full": hidden,
      })}
    >
      <div className="text">
        Hi there... Do you want to get alerted on new results and notifications?
      </div>
      <div className="flex items-center self-end space-x-2">
        <Button
          className="bg-transparent text-blue-500 hover:bg-gray-100 "
          onClick={handleClose}
        >
          No Thanks
        </Button>
        <Button onClick={handleYes}>Yes</Button>
      </div>
    </div>
  );
};

export default PermissionPopup;
