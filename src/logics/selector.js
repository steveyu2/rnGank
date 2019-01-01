import { createSelector } from "reselect";
import Immutable from "immutable";
import { arrayUnique as _arrayUnique } from "~/common/util";

export const propsDiff = createSelector(
  prevProps => prevProps,
  nextProps => nextProps,
  (prevProps, nextProps) => {
    prevProps = Immutable.fromJS(this.props);
    nextProps = Immutable.fromJS(nextProps);

    return !Immutable.is(prevProps, nextProps);
  }
);

export const arrayUnique = createSelector(
  arr => arr,
  arr => _arrayUnique(arr, v => v._id)
);
