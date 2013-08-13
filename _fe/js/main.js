requirejs.config({
  paths: {
    text: '../../bower_components/text/text',
    jquery: '../../bower_components/jquery/jquery',
    jade: '../../bower_components/jade/runtime'
  }
});

require([
  'jquery',
  'templates',
  'text!fake.json'
], function (
  $,
  templates,
  tileData
) {
  var tileData = JSON.parse(tileData);
  var tileString = '';

  var $body = $('body');
  var $tileContainer = $(templates.tileContainer());

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  $body.append(templates.header({
    name: 'Herbert West'
  }));

  tileData.forEach(function (tile, i) {
    var tileTemplate = templates['tiles' + capitalize(tile.type)] || templates['tilesDefault'];
    tileString += tileTemplate(tile);
  });

  $tileContainer.append(tileString);
  $body.append($tileContainer);

});
