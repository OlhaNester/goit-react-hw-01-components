const MyFirstComp = (props) => {
  return (
    <div className="test-comp">
      <h2> Test-Component</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        dolor quae. Nobis obcaecati minima molestias porro eveniet praesentium
        dolore labore esse quam recusandae! Nihil, autem quia earum magni
        maiores facere!
      </p>
      <p>{props.user.name}</p>
    </div>
  );
};
export default MyFirstComp;
