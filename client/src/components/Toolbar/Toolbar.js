import React, { useState, useEffect } from 'react';
import { Button, Label, Input } from 'reactstrap';

import './Toolbar.css';
import { highlight } from '../../Utility/Helpers';


function Toolbar ({codes, selected, handler, emmitChange}) {
  const [codeList, setCodeList] = useState(codes);
  const [selectedCode, setSelectedCode] = useState(selected);

  useEffect(() => {
    handler(selectedCode);
    setCodeList(codes);
  }, [selectedCode, codes]);

  function newSelection(event){
    var i;
    for (i = 0; i < codeList.length; i++) {
      if (codeList[i].getName() === event.target.value){
        setSelectedCode(codeList[i]);
      }
    }
    console.log(selectedCode);
    //const morten = codeList[event.target.value];
    //setSelectedCode(event.target.value);
  }

  function removeCode(){
    document.execCommand('removeFormat', false, null);
  }

  function addCode(){
    console.log(selectedCode.getName() + ": " + selectedCode.getColor());
    highlight(selectedCode.getColor());
  }

  return (
    <div className="toolbar-container">
      <Label className="label">Select Code: </Label>
      <div className="toolbar-innerContainer">
        <Input value={selectedCode.getName()} onChange={newSelection} className="select btn-dark" type="select" name="select" id="exampleSelect">
          {
            (codeList) ?
            codeList.map(code => {
              return <option code={code} key={code.getId()}>{code.getName()}</option>
            }) :
            null
          }
        </Input>
        <Button className="btn-dark" onClick={addCode}>Apply</Button>
        <Button className="btn-dark" onClick={removeCode}>Remove</Button>
      </div>
    </div>
  );
}

export default Toolbar;