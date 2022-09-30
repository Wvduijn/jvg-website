// The event cards used for the activity pages:
/*  
Props will be:

    category: for the type of event
    title
    description
    date
    time


*/

import CalendarIcon from "components/icons/CalendarIcon";

const EventCard = (props: any) => {
  return (
    <div className="overflow-hidden bg-white rounded-lg dark:bg-gray-800 shadow-lg">
      <div className="flex items-stretch">
        <div className="basis-1/2">
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="Article"
          />
        </div>
        <div className="p-6 basis-1/2 flex flex-col">
          <div>
            {/* extract this to be a tag */}
            <span className="inline-block text-xs font-medium text-slate-100 uppercase bg-amber-600 p-2 rounded mr-4 dark:text-slate-100">
              Product
            </span>
          </div>
          <div>
            <a
              href="#"
              className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600"
            >
              I Built A Successful Blog In One Year
            </a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
              parturient et sem ipsum volutpat vel. Natoque sem et aliquam
              mauris egestas quam volutpat viverra. In pretium nec senectus
              erat. Et malesuada lobortis.
            </p>
          </div>
          <div className="mt-auto">
            <div className="flex items-center">
              <div className="flex items-center">
                <img
                  className="object-cover h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                  alt="Avatar"
                />
                <a
                  href="#"
                  className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                >
                  Jone Doe
                </a>
              </div>
              <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                21 SEP 2015
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
