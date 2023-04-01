import React from 'react';

const Question = () => {
    return (
        <div>
           <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl text-center">Frequently Asked Questions</h2>
		<p className="mt-4 mb-8 dark:text-gray-400"></p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg mb-8 bg-slate-100">
				<summary className="px-4 py-6 focus:outline-none  focus-visible:ring-violet-400 font-semibold">1.What is difference between props vs state?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"> <span className='font-bold'>Props:</span> Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.</p>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"> <span className='font-bold'>State</span> The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.</p>
			</details>
			<details className="w-full border rounded-lg bg-slate-100">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-semibold">2.How does work useState?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"> <span className='font-bold'>UseState:</span> useState is a React hook function that returns an array of two values. The first value of this array is the current state and the second value is used to set the state that can be updated at any time. To use useState first, the hook must be imported. A variable is then set to the current state and the set state value. </p>
			</details>
			<details className="w-full border rounded-lg bg-slate-100">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-semibold">3.Purpose of useEffect other than fetching data?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"><span className='font-bold'>UseEffect:</span> useEffect is a React hook that can do something while a particular piece of code is running. It usually depends on variable state. The first parameter of a useEffect function is a callback function to be run. It usually returns a function that is run after a particular piece of code is run. For example, if you've created a component that uses local state to display an output. You can optionally set options dependent on this local state, such as a timeout for message transfers.</p>
			</details>
			<details className="w-full border rounded-lg bg-slate-100">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-semibold">4.How does work React?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"><span className='font-bold'>React:</span> React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ReactJS is an open-source, component-based front-end library responsible only for the view layer of the application. React is used to create modular user interfaces. It promotes the development of reusable UI components that display dynamic data.</p>
			</details>
		</div>
	</div>
</section>
        </div>
    );
};

export default Question;