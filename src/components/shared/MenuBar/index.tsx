import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Content, Title, MenuLinks, Link, Form } from './styled';
import { PropsMenuBar } from './types';
import { useTranslation } from 'react-i18next';
import { Select, MenuItem, InputLabel } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 120,
      color: '#fff',
      marginRight: 30,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);


export default function MenuBar(props: PropsMenuBar) {
    const styles = useStyles();
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState('');

    useEffect(() => setLanguage(i18n.language), [i18n.language]);

    const handleChange = (event: any)=> {
        const language = event.target.value;
        i18n.init({
            lng: language
        }, () => {
            setLanguage(language);
        })
    }

    return (
        <Container>
            <Title>{props.title}</Title>
            <Content>
                <Form variant="outlined" className={styles.formControl}>
                    <InputLabel id="select-outlined-label">{t('menu:LANGUAGE')}</InputLabel>
                    <Select
                        labelId="select-outlined-label"
                        id="select-outlined"
                        value={language}
                        onChange={handleChange}
                        label="Age"
                    >
                        <MenuItem value={'pt'}>{t('menu:PORTUGUESE')}</MenuItem>
                        <MenuItem value={'en'}>{t('menu:ENGLISH')}</MenuItem>
                    </Select>
                </Form>
                <MenuLinks>
                    <Link>{t('menu:HOME')}</Link>
                    <Link>{t('menu:CATEGORIES')}</Link>
                    <Link>{t('menu:ABOUT_ME')}</Link>
                </MenuLinks>
            </Content>
        </Container>
    );
}
