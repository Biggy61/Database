import {BrowserRouter, Routes, Route} from "react-router-dom";

import React from 'react'
import Home from "./Home";
import CreateForm from "./Monkey/CreateForm";
import View from "./Monkey/View";
import UpdateForm from "./Monkey/UpdateForm";
import ViewAll from "./Monkey/ViewAll";

export default function AppRoutes() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path="/create-monkey" element = {<CreateForm />}/>
      <Route path="/view-monkey/:id" element = {<View />}/>
      <Route path="/update-monkey/:id" element = {<UpdateForm />}/>
      <Route path="/view-monkey" element = {<ViewAll />}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}
