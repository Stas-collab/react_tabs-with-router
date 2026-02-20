import { Link, useParams } from 'react-router-dom';
import { tabs } from '../../api/tabsApi';
import classNames from 'classnames';

export const Tabs: React.FC = () => {
  const { tabId } = useParams();
  const active = tabs.find(t => t.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': tabId === tab.id })}
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {!active ? (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          {active.content}
        </div>
      )}
    </>
  );
};
