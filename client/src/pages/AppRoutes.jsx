import {BrowserRouter, Routes, Route} from "react-router-dom";

import React from 'react'
import Home from "./Home";
import {CreateForm as CreateMonkey} from "./Monkey/CreateForm";
import {View as ViewMonkey} from "./Monkey/View";
import {UpdateForm as UpdateMonkey} from "./Monkey/UpdateForm";
import {ViewAll as MonkeyList} from "./Monkey/ViewAll";
import {Created as CreatedMonkey} from "./Monkey/Created"

export default function AppRoutes() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path="/create-monkeys" element = {<CreateMonkey />}/>
      <Route path="/view-monkey/:id" element = {<ViewMonkey />}/>
      <Route path="/update-monkey/:id" element = {<UpdateMonkey />}/>
      <Route path="/created-monkey/:id" element = {<CreatedMonkey />}/>
      <Route path="/view-monkeys" element = {<MonkeyList />}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}
