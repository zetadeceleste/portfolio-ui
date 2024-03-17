import List from '../List'

const SocialLinks = () => (
  <List
    data={[
      {
        text: 'zdceleste@gmail.com',
        link: 'mailto:zdceleste@gmail.com',
        iconName: 'mail',
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
    ]}
  />
)

export default SocialLinks
