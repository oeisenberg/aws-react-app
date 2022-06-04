This project was used to learn Amplify - an tool to host a dynamic websites on AWS.

The [AWS](https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/) tutorial was followed, but a similar similar version exists in [Amplify](https://docs.amplify.aws/start/getting-started/installation/q/integration/react/)'s own documentation.

Some issues were encountered and had to be solved for the projct to work as expected.
1. Enforcing amplify's versioning in the backend.
    1. The version number had to be forced as the 'latest' tag was not using the latest version. ([Reported Issue](https://github.com/aws-amplify/amplify-hosting/issues/2552))
1. Authentication issue when using the API.
    1. Using an incorrect auth method on the API caused the API model to be incorrectly changed to include _@auth_ following [auth rules documentation](https://docs.amplify.aws/cli/graphql/authorization-rules/), however, the build phase would still fail due to an incorrect backend set up and the API had to be readded.

_More issues & details to be added_