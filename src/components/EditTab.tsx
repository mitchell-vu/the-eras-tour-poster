import { useApp } from '@/contexts/AppContext';
import React from 'react';

const EditTab: React.FC = () => {
  const { title, setTitle, subTitle, setSubTitle } = useApp();

  return (
    <div>
      <h2 className="text-xl font-semibold">Images</h2>
      <label htmlFor="file-upload-main">
        <input accept=".jpg,.png,.jpeg,.heic" type="file" name="file-upload-main" id="file-upload-main" />

        <div className="mb-4 mt-4 cursor-pointer rounded-lg bg-eras-midnight p-3 text-center font-sans text-white shadow-xl hover:bg-eras-midnight">
          <div className="rounded-md border-2 border-dashed border-gray-400 p-5">
            <p className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="inline-block h-14 w-14"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                ></path>
              </svg>
            </p>
            <div>
              <p>Drag &amp; drop</p>
              <p>or browse files</p>
            </div>
          </div>
        </div>
      </label>

      <h2 className="text-xl font-semibold">Text</h2>
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          className="border border-eras-midnight p-2"
        />
      </fieldset>
      <fieldset className="flex flex-col gap-2">
        <label htmlFor="sub-title">Sub-title</label>
        <input
          id="sub-title"
          type="text"
          value={subTitle}
          onChange={({ target }) => setSubTitle(target.value)}
          className="border border-eras-midnight p-2"
        />
      </fieldset>
    </div>
  );
};

export default EditTab;
