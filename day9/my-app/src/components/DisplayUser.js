import "./Loader.css";
const DisplayUser = ({ data }) => {
  return (
    <div className="display">
      <ul>
        {data.map((u) => (
          <li key={u.id}>
            {u.id}: {u.name},{u.Address}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default DisplayUser;
