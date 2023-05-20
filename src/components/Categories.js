import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((store) => store.categories);
  dispatch(checkStatus(status));
  return (
    <div>
      <h3>Coming soon... categories</h3>
      <h2>{status}</h2>
    </div>
  );
};

export default Categories;
