import { text } from '../../locale/locale';

export default function NewsletterForm() {
  return (
    <form
      action="https://land.us13.list-manage.com/subscribe/post"
      method="POST"
      className="form form--newsletter"
    >
      <input type="hidden" name="u" value="479aa86643f7fc633b5502d3d" />
      <input type="hidden" name="id" value="425e692de2" />

      <h2>{text('newsletter.title')}</h2>
      <p>{text('newsletter.description')}</p>

      <input
        type="email"
        name="MERGE0"
        id="MERGE0"
        size="25"
        placeholder={text('newsletter.email-placeholder')}
      />

      <input
        type="text"
        name="MERGE1"
        id="MERGE1"
        size="25"
        placeholder={text('newsletter.name-placeholder')}
      />

      <button className="btn inverted with-arrow" type="submit" name="submit">
        {text('newsletter.button')}
      </button>

      <input
        type="hidden"
        name="ht"
        value="40e93cf2d5b70de69d3ca93e3b14bec467d0082d:MTY3MDYwOTAyMi44Mjg0"
      />
      <input type="hidden" name="mc_signupsource" value="hosted" />
    </form>
  );
}
