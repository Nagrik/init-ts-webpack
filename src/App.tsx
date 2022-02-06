import React, { useEffect } from 'react';

import './global.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTestInfo } from '@/store/actions/initial';
import { selectTestData } from '@/store/selectors/initial';

function App() {
  const dispatch = useDispatch();
  const selectInitialData = useSelector(selectTestData);

  useEffect(() => {
    dispatch(getTestInfo());
  }, []);

  return (
    <>
      <div>
        ИНИТ :Х
      </div>
      <div>
        {JSON.stringify(selectInitialData)}
      </div>
    </>
  );
}

export default App;
