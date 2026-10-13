import FitLog from '../../../lib/FitLog';
import workouts from '../../../lib/workouts.json';
export function generateStaticParams(){return workouts.map(w=>({id:String(w.id)}));}
export default async function Detail({params}){const {id}=await params;return <FitLog page="detail" id={id}/>;}
