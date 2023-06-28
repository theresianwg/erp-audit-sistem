interface ItemFormProps {
  title: string;
  handleCancel: any;
  handleSubmit: any;
  handleChange: any;
  item?: any;
}

export default function ItemForm(props: ItemFormProps) {
  return (
    <div className="flex flex-col p-5">
      <h3 className="text-black">{props.title}</h3>

      <form onSubmit={props.handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-black">
            Nama Item
          </label>
          {props.item ? (
            <input
              type="text"
              name="name"
              id="name"
              onChange={props.handleChange}
              className="border border-black bg-gray-300 text-black rounded-md p-1 text-black"
              value={props.item.name}
            />
          ) : (
            <input
              type="text"
              name="name"
              id="name"
              onChange={props.handleChange}
              className="border border-black bg-gray-300 text-black rounded-md p-1"
            />
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="id_category" className="text-black">
            Kategori
          </label>
          {props.item ? (
            <select
              name="id_category"
              id="id_category"
              onChange={props.handleChange}
              className="border border-black bg-gray-300 text-black rounded-md p-1 text-black"
              value={props.item.id_category}
            >
              <option value="1">Raw Material</option>
              <option value="2">End Product</option>
            </select>
          ) : (
            <select
              name="id_category"
              id="id_category"
              onChange={props.handleChange}
              className="border border-black bg-gray-300 text-black rounded-md p-1"
            >
              <option value="1">Raw Material</option>
              <option value="2">End Product</option>
            </select>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="id_coa" className="text-black">
            Modal
          </label>
          <select
            name="id_coa"
            id="id_coa"
            onChange={props.handleChange}
            className="border border-black bg-gray-300 text-black rounded-md p-1"
          >
            <option value="11">Finished Good</option>
            <option value="100">Intermediete Good</option>
            <option value="7">Purchased Good</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="id_tax" className="text-black">
            Tax
          </label>
          <select
            name="id_tax"
            id="id_tax"
            onChange={props.handleChange}
            className="border border-black bg-gray-300 text-black rounded-md p-1"
          >
            <option value="1">PPn</option>
          </select>
        </div>
        <div className="flex gap-2 items-end">
          <div className="flex flex-col gap-1">
            <label htmlFor="price" className="text-black">
              Harga
            </label>
            <input
              type="text"
              name="price"
              id="price"
              onChange={props.handleChange}
              className="border border-black bg-gray-300 text-black rounded-md p-1"
            />
          </div>
          <p className="text-black">per</p>
          <div className="flex flex-col gap-1">
            <label htmlFor="unit" className="text-black">
              Unit
            </label>
            <select
              name="unit"
              id="unit"
              onChange={props.handleChange}
              className="border border-black bg-gray-300 text-black rounded-md p-1"
            >
              <option value="loyang">Loyang</option>
              <option value="kg">Kg</option>
              <option value="l">Liter</option>
            </select>
          </div>
        </div>
        <div className="flex gap-1">
          <button
            onClick={props.handleCancel}
            className="bg-red-500 px-3 py-1 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={props.handleSubmit}
            className="bg-green-500 px-3 py-1 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
