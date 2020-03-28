import React from 'react';


class ListItem extends React.Component {
    render() {
        const { data, date, filters, filter_string } = this.props;
        if (filter_string !== '') {
            const hidden = filters.some(filter => !data.some(item => item.title.replace(/ /g, '').replace(/\./g, '').search(filter) > -1))
            return (
                <div className={hidden && 'hidden'}>
                    <code className='date'>{date}</code>
                    {
                        data.map((item, key) =>
                            filters.every(filter => item.title.replace(/ /g, '').replace(/\./g, '').search(filter) > -1) &&
                            <div key={key} className="ListItem">
                                <h4 className="Text">{item.title}</h4>
                                <a className="downloadLink" href={item.link}>
                                    <button className="downloadButton">Download</button>
                                </a>
                            </div>
                        )
                    }
                </div>
            )
        } else {
            return (
                <div>
                    <code className='date'>{date}</code>
                    {
                        data.map((o, key) =>
                            <div key={key} className="ListItem">
                                <h4 className="Text">{o.title}</h4>
                                <a className="downloadLink" href={o.link}>
                                    <button className="downloadButton">Download</button>
                                </a>
                            </div>
                        )
                    }
                </div>
            )
        }

    }
}


class ResultList extends React.Component {
    render() {
        const { datas, filters, filter_string } = this.props;
        return (
            <div>
                {
                    datas.map(data =>
                        Object.keys(data).map((date, key) => {
                            return <ListItem key={key} data={data[date]} date={date} filters={filters} filter_string={filter_string} />
                        })
                    )
                }
            </div>
        )
    }
}


export default ResultList;