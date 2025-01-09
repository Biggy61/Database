import {BrowserRouter, Routes, Route} from "react-router-dom";

import React from 'react'
import Home from "./Home";
import {CreateForm as CreateMonkey} from "./Monkey/CreateForm";
import {View as ViewMonkey} from "./Monkey/View";
import {UpdateForm as UpdateMonkey} from "./Monkey/UpdateForm";
import {ViewAll as MonkeyList} from "./Monkey/ViewAll";
import {Created as CreatedMonkey} from "./Monkey/Created"

import {CreateForm as CreateDog} from "./Dog/CreateForm";
import {View as ViewDog} from "./Dog/View";
import {UpdateForm as UpdateDog} from "./Dog/UpdateForm";
import {ViewAll as DogList} from "./Dog/ViewAll";
import {Created as CreatedDog} from "./Dog/Created"

import {CreateForm as CreateBohata} from "./Bohata/CreateForm";
import {View as ViewBohata} from "./Bohata/View";
import {UpdateForm as UpdateBohata} from "./Bohata/UpdateForm";
import {ViewAll as BohataList} from "./Bohata/ViewAll";
import {Created as CreatedBohata} from "./Bohata/Created";

import {CreateForm as CreateBlud} from "./Blud/CreateForm";
import {View as ViewBlud} from "./Blud/View";
import {UpdateForm as UpdateBlud} from "./Blud/UpdateForm";
import {ViewAll as BludList} from "./Blud/ViewAll";
import {Created as CreatedBlud} from "./Blud/Created"

import {CreateForm as CreateProgrammer} from "./Programmer/CreateForm";
import {View as ViewProgrammer} from "./Programmer/View";
import {UpdateForm as UpdateProgrammer} from "./Programmer/UpdateForm";
import {ViewAll as ProgrammerList} from "./Programmer/ViewAll";
import {Created as CreatedProgrammer} from "./Programmer/Created";

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

      <Route path="/create-dogs" element = {<CreateDog />}/>
      <Route path="/view-dog/:id" element = {<ViewDog />}/>
      <Route path="/update-dog/:id" element = {<UpdateDog />}/>
      <Route path="/created-dog/:id" element = {<CreatedDog />}/>
      <Route path="/view-dogs" element = {<DogList />}/>

      <Route path="/create-bohatas" element = {<CreateBohata />}/>
      <Route path="/view-bohata/:id" element = {<ViewBohata />}/>
      <Route path="/update-bohata/:id" element = {<UpdateBohata />}/>
      <Route path="/created-bohata/:id" element = {<CreatedBohata />}/>
      <Route path="/view-bohatas" element = {<BohataList />}/>

      <Route path="/create-bluds" element = {<CreateBlud />}/>
      <Route path="/view-blud/:id" element = {<ViewBlud />}/>
      <Route path="/update-blud/:id" element = {<UpdateBlud />}/>
      <Route path="/created-blud/:id" element = {<CreatedBlud />}/>
      <Route path="/view-bluds" element = {<BludList />}/>

      <Route path="/create-programmers" element = {<CreateProgrammer />}/>
      <Route path="/view-programmer/:id" element = {<ViewProgrammer />}/>
      <Route path="/update-programmer/:id" element = {<UpdateProgrammer />}/>
      <Route path="/created-programmer/:id" element = {<CreatedProgrammer />}/>
      <Route path="/view-programmers" element = {<ProgrammerList />}/>


    </Routes>
    </BrowserRouter>
    </>
  )
}
