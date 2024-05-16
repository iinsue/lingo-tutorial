"use client";

import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

import { CourseList } from "./course/list";
import { CourseCreate } from "./course/create";
import { CourseEdit } from "./course/edit";

import { UnitList } from "./units/list";
import { UnitCreate } from "./units/create";
import { UnitEdit } from "./units/edit";

import { LessonList } from "./lesson/list";
import { LessonCreate } from "./lesson/create";
import { LessonEdit } from "./lesson/edit";

import { ChallengeList } from "./challenge/list";
import { ChallengeCreate } from "./challenge/create";
import { ChallengeEdit } from "./challenge/edit";

const dataProvider = simpleRestProvider("/api");

const App = () => {
  return (
    <>
      <Admin dataProvider={dataProvider}>
        <Resource
          name="courses"
          recordRepresentation="title"
          list={CourseList}
          create={CourseCreate}
          edit={CourseEdit}
        />
        <Resource
          name="units"
          recordRepresentation="title"
          list={UnitList}
          create={UnitCreate}
          edit={UnitEdit}
        />
        <Resource
          name="lessons"
          recordRepresentation="title"
          list={LessonList}
          create={LessonCreate}
          edit={LessonEdit}
        />
        <Resource
          name="challenges"
          recordRepresentation="title"
          list={ChallengeList}
          create={ChallengeCreate}
          edit={ChallengeEdit}
        />
      </Admin>
    </>
  );
};

export default App;
