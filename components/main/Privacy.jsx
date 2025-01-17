import React from 'react';
import ReactMarkdown from 'react-markdown';
import Grid from '@mui/material/Grid';
import makeStyles from '@mui/styles/makeStyles';
import sharedLayout from '@theme/layout';
import TextHeading from '@components/common/TextHeading';
import ContentBody from '@components/common/ContentBody';
import useContentful from '../../hooks/useContentful';

const useStyles = makeStyles({
  contentBody: {
    fontSize: '1rem',
  },
});

const query = `
  query {
      privacyPolicy(id: "2HBnjUBMJ7KNimZGjhAsEi") {
      body
    }
  }
`;

function Privacy() {
  const { data, errors } = useContentful(query);
  const classes = { ...useStyles(), ...sharedLayout() };

  React.useEffect(() => {
    if (errors) console.log(errors);
  }, [errors]);

  return (
    <>
      <TextHeading>
        Privacy Policy
      </TextHeading>

      <ContentBody maxWidth="md">
        { data
        && (
          <Grid container>
            <Grid item>
              <ReactMarkdown className={classes.contentBody}>
                {data.privacyPolicy.body}
              </ReactMarkdown>
            </Grid>
          </Grid>
        )}
      </ContentBody>
    </>
  );
}

export default Privacy;
