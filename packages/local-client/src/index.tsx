import 'bulma/css/bulma.min.css';
import './styles/global-styles.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './state';
import CellList from './components/cell-list';

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ margin: '0 auto', textAlign: 'center' }}>
        <p>
          请使用内置的 print
          函数来进行结果预览。由于手机浏览器的储存限制，请在桌面浏览器上使用。
        </p>
      </div>
      <div>
        <CellList />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
