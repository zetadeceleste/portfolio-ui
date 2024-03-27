import List from '../List'

const SocialLinks = () => (
  <List
    data={[
      {
        text: 'zdceleste@gmail.com',
        iconName: 'email',
      },
      {
        text: 'github.com/zetadeceleste',
        link: 'https://github.com/zetadeceleste',
        iconName: 'github',
      },
      {
        text: 'linkedin.com/in/zetadeceleste',
        link: 'https://www.linkedin.com/in/zetadeceleste/',
        iconName: 'linkedin',
      },
      {
        text: 'My resume',
        link: '/assets/celesteZapataResume.pdf',
      },
    ]}
  />
)

export default SocialLinks
