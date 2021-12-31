import * as React from 'react';
import { TextField, Autocomplete, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface Iprops {
    bR:string,
    width: string,
}

export default function AutoComplete({ bR, width }:Iprops) {
  const options = topFilms.map((option) => {
    const firstLetter = option.name.toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? 't' : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      sx={{ width: { width }, borderRadius: { bR } }}
      freeSolo
      groupBy={(option:any) => option.firstLetter}
      getOptionLabel={(option:any) => option.title}
      options={topFilms}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {option.title}
        </Box>
      )}
      renderInput={(params:any) => (
        <TextField
          {...params}
          placeholder="search"
          InputProps={{
            ...params.InputProps,
            type: 'search',
            startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
            }}
        />
      )}
    />
  );
}


const topFilms = [
  {
 title: 'The Shawshank Redemption',
year: 1994,

       name: 'trending',



},
  {
 title: 'The Godfather',
year: 1972,

      name: '1trending',

},
  {
 title: 'The Godfather: Part II',
year: 1974,

      name: 'grending',

},
  {
 title: 'The Dark Knight',
year: 2008,

      name: 'frending',

},
  {
 title: '12 Angry Men',
year: 1957,

    name: '2rending',

},

];
