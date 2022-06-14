const ListItem = ({taskList}) => {
    return ( 
        <ul>
            {taskList.data.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        
     );
}
 
export default ListItem;