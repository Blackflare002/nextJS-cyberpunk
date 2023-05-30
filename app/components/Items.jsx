const Items = ({ items }) => {
	return (
		<div>
			{/* <p>Hello</p> */}
			{items.map((item) => (
				<div key={item._id}>
					<p>{item.name}</p>
				</div>
			))}
		</div>
	);
};

export default Items;
