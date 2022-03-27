import React, { useMemo } from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { languages } from '../next-i18next.config';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const LanguageSwitcher = () => {
  const classes = useStyles();
  const router = useRouter();
  const { t } = useTranslation();

  const handleLanguageChange = e => {
    router.replace(
      {
        pathname: router.pathname,
        query: router.query,
      },
      undefined,
      {
        locale: e.target.value,
      },
    );
  };

  const langs = useMemo(() => languages, []);

  return (
    <FormControl className={classes.root} variant="outlined" fullWidth>
      <Select value={router.locale} onChange={handleLanguageChange} MenuProps={MenuProps}>
        {langs.map(({ locale, name }) => (
          <MenuItem key={locale} value={locale}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
