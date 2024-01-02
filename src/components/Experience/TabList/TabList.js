import { useState } from 'react';
import './TabList.css';

const TabList = (props) => {

    const { data } = props;

    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const activeTabData = data[activeTabIndex];
  
    const onTabChange = idx => setActiveTabIndex(idx);

    return (
        <div className='tabList'>
            <div className='tabs'>
                {data.map((e, idx) => (
                    <div
                    className={`tab ` + (idx === activeTabIndex ? ` activeTab` : '')}
                    onClick={() => onTabChange(idx)}
                    key={idx}
                    >
                    {e.company}
                  </div>
                ))}
            </div>

            <div className='tabContents'>
                <div className='tabContentHeader'>
                    {activeTabData.title}
                    <span className='tabContentHeaderLinkContainer'>
                        @
                        <a className='tabContentHeaderLink' href={activeTabData.companyLink} target="_blank" rel="noreferrer">
                            {activeTabData.company}
                        </a>
                    </span>

                </div>

                <div className='tabContentSubHeader'>
                    {activeTabData.date}
                </div>

                <ul className='tabContentBody'>
                {activeTabData.body.map((e, idx) => (
                    <li key={idx}>{e}</li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default TabList