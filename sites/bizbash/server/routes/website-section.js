const queryFragment = require('@endeavorb2b/base-website-themes/default/api/fragments/website-section-page');
const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const submissionHandler = require('@endeavorb2b/base-website-common/utils/contact-us');
const section = require('../templates/website-section');
const contactUsTemplate = require('../templates/website-section/contact-us');
const gatherGeeksTemplate = require('../templates/website-section/gathergeeks');

module.exports = (app) => {
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUsTemplate,
    queryFragment,
  }));
  submissionHandler(app);

  app.get('/:alias(gathergeeks)', withWebsiteSection({
    template: gatherGeeksTemplate,
    queryFragment,
  }));

  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
