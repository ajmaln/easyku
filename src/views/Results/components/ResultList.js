import classNames from "classnames";
import React from "react";
import Button from "../../../components/Button";
import Icon from "../../../components/Icon";

const ResultItem = ({ title, link, date }) => (
  <div className="border rounded-md hover:shadow transition-shadow duration-300 max-w-md p-4 flex flex-col justify-between mb-4 mr-4">
    <div className="mb-3">
      <p className="text-left mb-1">{title}</p>
      <p className="text-gray-400 font-light text-xs text-left">{date}</p>
    </div>
    <div className="flex space-x-2">
      <a href={link} download>
        <Button>
          Download <Icon className="text-base ml-2">download</Icon>
        </Button>
      </a>
      <a target="_blank" href={link}>
        <Button className="bg-transparent text-blue-500 hover:bg-gray-100">
          View <Icon className="text-base ml-2">visibility</Icon>
        </Button>
      </a>
    </div>
  </div>
);

const ListItem = ({ data, date, filters, filterString }) => {
  if (filterString !== "") {
    const hidden = filters.some(
      (filter) =>
        !data.some(
          (item) =>
            item.title.replace(/ /g, "").replace(/\./g, "").search(filter) > -1
        )
    );
    const filteredItems = data.filter((item) =>
      filters.every(
        (filter) =>
          item.title.replace(/ /g, "").replace(/\./g, "").search(filter) > -1
      )
    );
    return (
      <div
        className={classNames({
          hidden,
        })}
      >
        <div className="flex items-center px-6 space-x-2 sticky top-2 mb-2">
          <p className="font-mono">{date}</p>
          <div className="h-0.5 bg-gray-200 w-full" />
        </div>
        <div className="flex flex-wrap px-6 my-6">
          {filteredItems.map((item, key) => (
            <ResultItem key={key} date={date} {...item} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <code className="sticky font-mono">{date}</code>
        <div className="listItemWrapper">
          {data.map((item, key) => (
            <ResultItem key={key} {...item} />
          ))}
        </div>
      </div>
    );
  }
};

const ResultList = ({ datas, filters, filterString }) => (
  <div className="pt-6">
    {datas.map(({ date, entries }) => (
      <ListItem
        key={date}
        data={entries}
        date={date}
        filters={filters}
        filter_string={filterString}
      />
    ))}
  </div>
);

export default ResultList;
