import useSWR from 'swr';
import logo from './logo.svg';
import { fetchApprovalContent } from './service/fetchApprovalContent';
import './styles/App.css';

const App = () => {
  // 許可された要望を取得
  const { data } = useSWR('fetchApprovalContent', fetchApprovalContent)

  if (!data) {
    return <div>Loading...</div>;
  }

  console.log(data)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
