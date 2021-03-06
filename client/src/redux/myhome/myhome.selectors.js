import { createSelector } from "reselect";

const selectMyHome = ({ myHome }) => myHome;

export const selectHome = createSelector([selectMyHome], ({ home }) => home);

export const selectFilter = createSelector(
    [selectMyHome],
    ({ filter }) => filter
);

export const selectCountry = createSelector(
    [selectMyHome],
    ({ country }) => country
);

export const selectDisplayHome = createSelector(
    [selectMyHome],
    ({ displayHome }) => displayHome
);

export const selectToggleHome = createSelector(
    [selectMyHome],
    ({ toggleHome }) => toggleHome
);

export const selectToggleBackgroundHome = createSelector(
    [selectMyHome],
    ({ toggleBackgroundHome }) => toggleBackgroundHome
);
