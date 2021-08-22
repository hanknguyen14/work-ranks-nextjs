export function FilterBox({ searchTerm, setSearchTerm }: any) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-5 items-center">
      <div className="col-span-2 md:col-span-2">253 countries</div>
      <div className="col-span-3 md:col-start-4">
        <input
          type="text"
          name="search"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          className="w-full bg-gray-200 rounded p-3"
          placeholder="Filter by Name, Region, Subregion"
        />
      </div>
    </div>
  );
}
