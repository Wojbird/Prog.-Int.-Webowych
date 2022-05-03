import React, { useState } from "react";

const Groups = (props) => {
    const { setGroupList, groupList } = props;

    const [newName, setNewName] = useState();
    const [newTags, setNewTags] = useState();
    const [newCourses, setNewCourses] = useState();
    const [newMember1, setNewMember1] = useState();
    const [newEmail1, setNewEmail1] = useState();
    const [newMember2, setNewMember2] = useState();
    const [newEmail2, setNewEmail2] = useState();
    const [newMember3, setNewMember3] = useState();
    const [newEmail3, setNewEmail3] = useState();
    const [newMember4, setNewMember4] = useState();
    const [newEmail4, setNewEmail4] = useState();
    const [newMember5, setNewMember5] = useState();
    const [newEmail5, setNewEmail5] = useState();
    const [newDescription, setNewDescription] = useState();

    const handleNewName = (event) => {
        setNewName(event.target.value);
    };

    const handleNewTags = (event) => {
        setNewTags(event.target.value);
    };

    const handleNewCourses = (event) => {
        setNewCourses(event.target.value);
    };

    const handleNewMember1 = (event) => {
        setNewMember1(event.target.value);
    };

    const handleNewEmail1 = (event) => {
        setNewEmail1(event.target.value);
    };

    const handleNewMember2 = (event) => {
        setNewMember2(event.target.value);
    };

    const handleNewEmail2 = (event) => {
        setNewEmail2(event.target.value);
    };

    const handleNewMember3 = (event) => {
        setNewMember3(event.target.value);
    };

    const handleNewEmail3 = (event) => {
        setNewEmail3(event.target.value);
    };

    const handleNewMember4 = (event) => {
        setNewMember4(event.target.value);
    };

    const handleNewEmail4 = (event) => {
        setNewEmail4(event.target.value);
    };

    const handleNewMember5 = (event) => {
        setNewMember5(event.target.value);
    };

    const handleNewEmail5 = (event) => {
        setNewEmail5(event.target.value);
    };

    const handleNewDescription = (event) => {
        setNewDescription(event.target.value);
    };

    const handleAddNewItem = () => {
        if(newName!==""&&newEmail1!==""&&newMember1!==""&&newTags!==""&&newCourses!==""&&newDescription!==""){
            setGroupList(groupList.concat([[newName, newTags, newCourses, newMember1, newEmail1, newMember2, newEmail2, newMember3, newEmail3, newMember4, newEmail4, newMember5, newEmail5, newDescription]]));
        }
        console.log(groupList)
        setNewName("");
        setNewTags("");
        setNewCourses("");
        setNewMember1("");
        setNewEmail1("");
        setNewMember2("");
        setNewEmail2("");
        setNewMember3("");
        setNewEmail3("");
        setNewMember4("");
        setNewEmail4("");
        setNewMember5("");
        setNewEmail5("");
        setNewDescription("");
    };

    const groupListHTML = groupList.map((it, i) => {
        return (
            <div class="announcement">
                <a key={i}>{it[0]}</a>
                <br/>
                <a key={i}>Tags: {it[1]}; Courses: {it[2]};</a>
                <br/>
                <a key={i}>Members: {it[3]} {it[5]} {it[7]} {it[9]} {it[11]};</a>
                <br/>
                <p key={i}>{it[13]}</p>
            </div>
        )
    });

    return (
        <div class="main">
            <input id="dscr1" type="text" value={newName} onChange={handleNewName} placeholder="Name"/>
            <br/>
            <input id="dscr1" type="text" value={newTags} onChange={handleNewTags} placeholder="[Tags]"/>
            <input id="dscr1" type="text" value={newCourses} onChange={handleNewCourses} placeholder="Courses"/>
            <br/>
            <input id="dscr1" type="text" value={newMember1} onChange={handleNewMember1} placeholder="Member1"/>
            <input id="dscr1" type="text" value={newEmail1} onChange={handleNewEmail1} placeholder="E-mail"/>
            <br/>
            <input id="dscr1" type="text" value={newMember2} onChange={handleNewMember2} placeholder="Member2"/>
            <input id="dscr1" type="text" value={newEmail2} onChange={handleNewEmail2} placeholder="E-mail"/>
            <br/>
            <input id="dscr1" type="text" value={newMember3} onChange={handleNewMember3} placeholder="Member3"/>
            <input id="dscr1" type="text" value={newEmail3} onChange={handleNewEmail3} placeholder="E-mail"/>
            <br/>
            <input id="dscr1" type="text" value={newMember4} onChange={handleNewMember4} placeholder="Member4"/>
            <input id="dscr1" type="text" value={newEmail4} onChange={handleNewEmail4} placeholder="E-mail"/>
            <br/>
            <input id="dscr1" type="text" value={newMember5} onChange={handleNewMember5} placeholder="Member5"/>
            <input id="dscr1" type="text" value={newEmail5} onChange={handleNewEmail5} placeholder="E-mail"/>
            <br/>
            <input id="dscr2" type="text" value={newDescription} onChange={handleNewDescription} placeholder="Description..." />
            <input id="btn1" type="button" value="Add announcement" onClick={handleAddNewItem} />
            {groupListHTML}
        </div>
    );
};

export default Groups;