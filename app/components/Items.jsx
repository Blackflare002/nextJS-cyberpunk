const Items = ({ items }) => {
	return (
		<div>
			<li>
				{items.map((item) => (
					<div key={item._id}>
						<p>
							{item.name.length < 65
								? item.name
								: item.name.slice(0, 65) + "..."}
						</p>
						<p>In Stock: {item.numInStock}</p>
						<p>{item.price}</p>
					</div>
				))}
			</li>
		</div>
	);
};

export default Items;
