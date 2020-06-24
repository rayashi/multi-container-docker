import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default () => {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setValues] = useState([]);
  const [index, setIndex] = useState();

  useEffect(() => {
    fetchValues();
    fetchIndexes();
  }, []);


  const fetchValues = async () => {
    const values = await axios.get('api/values/current');
    values.data instanceof Object && setValues(values.data);
  };

  const fetchIndexes = async () => {
    const indexes = await axios.get('api/values/all');
    indexes.data instanceof Array && setSeenIndexes(indexes.data);
  };

  const renderIndexes = () => {
    return seenIndexes.map(({ number }) => number).join(', ');
  };

  const renderValues = () => {
    const entries = [];
    for(let key in values){
      entries.push(
        <div key={key}>
          For index {key} I calculates {values[key]}
        </div>
      )
    }
    return entries;
  }

  
 const handleSubmit = async event => {
    event.preventDefault();
    await axios.post('api/values', { index });
    setIndex('');
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your index:</label>
        <input value={index} onChange={event => setIndex(event.target.value)}/>
        <button>Submit!</button>
      </form>

      <h3>Indexes I have seen:</h3>
      {renderIndexes()}

      <h3>Values</h3>
      {renderValues()}
      
    </div>
  )
}