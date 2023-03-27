import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeComponent from "../../component/menu/homeComponent";
import GetWorkerAction from "../../storage/actions/worker/getWorkerAction";

const HomePages = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.getWorker.data);
  const loading = useSelector((state) => state.getWorker.isLoading)

  const [search, setSearch] = useState('')
  const [text, setText] = useState('')

  useEffect(() => {
    dispatch(GetWorkerAction(text));
  }, [dispatch, text])
  

  return (
    <>
      <HomeComponent data={data} isLoading={loading} search={search} setText={setText} setSearch={setSearch}/>
    </>
  );
};

export default HomePages;
