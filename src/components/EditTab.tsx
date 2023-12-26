import { useApp } from '@/contexts/AppContext';
import { CloudArrowUp, HandGrabbing } from '@phosphor-icons/react';
import classNames from 'classnames';
import React from 'react';
import { useDropzone } from 'react-dropzone';

const EditTab: React.FC = () => {
  const { title, setTitle, subTitle, setSubTitle } = useApp();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({});

  return (
    <div className="flex flex-col gap-6">
      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Images</h2>
        <div
          {...getRootProps()}
          className={classNames(
            'flex cursor-pointer flex-col items-center justify-center',
            'h-48 rounded-3xl border-[12px] border-eras-midnight bg-eras-midnight p-4 text-[#E0EDFD]',
            'transition duration-150 ease-in-out',
            'hover:border-[#E0EDFD]/[0.25]',
            { 'border-[#E0EDFD]/[0.25]': isDragActive },
          )}
        >
          <input {...getInputProps()} />
          {isDragActive && (
            <>
              <HandGrabbing size={52} weight="regular" />
              <p className="mt-2 text-center text-lg font-semibold">Drop to upload</p>
            </>
          )}

          {!isDragActive && (
            <>
              <CloudArrowUp size={52} weight="regular" />
              <p className="mt-2 text-center text-lg font-semibold">Drag & drop to upload</p>
              <p className="text-center text-sm opacity-45">or browse</p>
            </>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Text</h2>
        <fieldset className="flex flex-col gap-2">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
            placeholder="Enter your title here"
            className="rounded-full bg-eras-midnight px-4 py-3 font-semibold text-[#E0EDFD]"
          />
        </fieldset>

        <fieldset className="flex flex-col gap-2">
          <label htmlFor="sub-title">Sub-title</label>
          <input
            id="sub-title"
            type="text"
            value={subTitle}
            onChange={({ target }) => setSubTitle(target.value)}
            placeholder="Enter your sub-title here"
            className="rounded-full bg-eras-midnight px-4 py-3 font-semibold text-[#E0EDFD]"
          />
        </fieldset>
      </section>
    </div>
  );
};

export default EditTab;
