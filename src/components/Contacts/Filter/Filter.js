import { useDispatch, useSelector } from 'react-redux';
import { phonebookActions, phonebookSelectors } from '../../../redux/phonebook';

import './Filter.scss';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(phonebookSelectors.getFilter);
  const onChange = e => dispatch(phonebookActions.changeFilter(e.target.value));

  return (
    <label className="filter">
      <input
        className="filter__input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search contact..."
      />
      <span>
        <svg width="40" height="40" viewBox="0 0 612.01 612.01">
          <g>
            <g id="_x34__4_">
              <g>
                <path
                  d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0
				C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586
				l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8
				c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407
				S377.82,467.8,257.493,467.8z"
                />
              </g>
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </span>
    </label>
  );
}
