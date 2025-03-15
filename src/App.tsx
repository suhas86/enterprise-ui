import Application from './packaging-list';
import TimeZone from './time-zone';

function App() {
  return (
    <>
      {/* <Counter /> */}
      <Application />
      <TimeZone getTodos={true} />
    </>
  );
}

export default App;
