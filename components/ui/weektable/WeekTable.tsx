
const WeekTable = (props: any) => {
  const { data } = props;
  return (
    <>
      <div className="grid grid-rows-6 border-black-50 overflow-y-auto font-roboto leading-relaxed text-base text-gray-500 my-6">
        {data.map((day: any, index: number) => {
          return (
            <div
              className="flex flex-row gap-8 border-t-2 border-solid border-slate-200 py-4"
              key={index}
            >
              <div className="w-32 font-bold">{day.day}</div>
              {day.options.map((option: any, index: number) => {
                return (
                  <div className="flex flex-col gap-1 w-64" key={index}>
                    <div className="italic">{option.time}</div>
                    <div>{option.activity}</div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WeekTable;
