import './map.scss';

import Titles from '../../components/titles/titles';
import DisplayMap from '../../components/display-map/display-map';
import { useAxios } from '../../utils/useAxios';
import Sidebar from '../../components/sidebar/sidebar';
import BookcaseContextProvider from '../../components/bookcase-context-provider/bookcase-context-provider';

function MapPage() {

  const { status, data } = useAxios('https://www.odwb.be/explore/dataset/emplacements-des-boites-a-livres-dandenne/download/?format=json&timezone=Europe/Berlin&lang=fr')

  return (
    <div id="map" className="map">
      <Titles
        title="Andenne"
        subTitle="Boites à livres"
      />
      <BookcaseContextProvider>
        <Sidebar  status={status} data={data}/>
        <DisplayMap status={status} data={data}/>
      </BookcaseContextProvider>
    </div>
  );
}

export default MapPage;
