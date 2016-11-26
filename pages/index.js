import React from "react";
/*
    gmail:
      kwappa.856 _at_ gmail.com
            <li>twitter : <a href="http://twitter.com/kwappa" target="_blank=">http://twitter.com/kwappa</a></li>
            <li>facebook : <a href="http://www.facebook.com/kwappa" target="_blank">http://www.facebook.com/kwappa</a></li>
            <li>github : <a href="https://github.com/kwappa" target="_blank">https://github.com/kwappa</a></li>
            <li>Speaker Deck : <a href="https://speakerdeck.com/kwappa" target="_blank">https://speakerdeck.com/kwappa</a></li>
            <li>slideshare : <a href="http://www.slideshare.net/kwappa" target="_blank">http://www.slideshare.net/kwappa</a></li>
            <li>Qiita : <a href="http://qiita.com/users/kwappa" target="_blank">http://qiita.com/users/kwappa</a></li>
            <li>coderwall : <a href="http://coderwall.com/kwappa" target="_blank">http://coderwall.com/kwappa</a></li>
            <li>RubyGems.org : <a href="https://rubygems.org/profiles/47624" target="_blank">https://rubygems.org/profiles/47624</a></li>
            <li>forkwell : <a href="http://forkwell.com/u/kwappa" target="_blank">http://forkwell.com/u/kwappa</a></li>
            <li>QA@IT : <a href="http://qa.atmarkit.co.jp/users/kwappa" target="_blank">http://qa.atmarkit.co.jp/users/kwappa</a></li>
            <li>Google Plus : <a href="http://gplus.to/kwappa" target="_blank">http://gplus.to/kwappa</a></li>
            <li>LinkedIn : <a href="http://www.linkedin.com/in/kwappa" target="_blank">http://www.linkedin.com/in/kwappa</a></li>
            <li>mixi : <a href="http://mixi.jp/show_profile.pl?id=176118" target="_blank">176118</a></li>
            <li>The Interviews : <a href="http://theinterviews.jp/kwappa" target="_blank">http://theinterviews.jp/kwappa</a></li>
            <li>Skype ID : hiromu.shioya</li>
            <li>LINE ID : kwappa</li>
          </ul>
*/


export class Contacts extends React.Component {
  render() {
    var contactList = [
      { 'name': 'twitter',  'url': 'https://twitter.com/kwappa' },
      { 'name': 'facebook', 'url': 'http://www.facebook.com/kwappa' }
    ]

    return (
      <div>
        {contactList.map((contact) => {
           return (
             <li><a href={contact.url}>{contact.name}</a></li>
           )
        })}
      </div>
    )
  }
}


export default () => (
  <div>
    Hello.
    <p>
      this is kwappa's website.
    </p>
    <ul>
      <Contacts />
    </ul>
  </div>
)
