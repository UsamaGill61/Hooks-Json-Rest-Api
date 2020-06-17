import React from "react";
import useResources from './useResources'




const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <div>
      <ul>
        {resources.map((eachitem, index) => (
          <li key={eachitem.id}>
            {index}
            <br />
            {eachitem.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;
