import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledRaiting} from "./components/UncontrolledRaiting/UncontrolledRaiting";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Raiting,RatingValueType} from "./components/Raiting/Raiting";
import {Accordion,AccordionChangeType} from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";


function App() {

    let [ratingValue,setRatingValue]= useState<RatingValueType>(1)
    let [accordionCollapsed,setAccordionCollapsed]= useState<AccordionChangeType>(false)
    let [switchOn,setSwitchOn]= useState<boolean>(false)

    return (
        <div className={"App"}>
        <PageTitle title={"MY APP COMPONENT"}/>

            <UncontrolledAccordion titleValue={"MENU"} />
            // говно код
            <Accordion items={[
                {title: "Видео", value: 1},
                {title: "Картинки", value: 2},
                {title: "Новости", value: 3},
                {title: "Карты", value: 4},]}
                       onClick={(value) => {
                           alert(`You change ${value}`)
                       }}
                       titleValue={"SETTINGS"}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}/>

            <UncontrolledRaiting onChange={()=>{}} />
            <Raiting value={ratingValue} onClickHandler={setRatingValue}/>

            <UncontrolledOnOff onChange={setSwitchOn} /> {switchOn.toString()}
            <OnOff on={switchOn} onChange={setSwitchOn} />



        </div>
    );
}

type  PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
