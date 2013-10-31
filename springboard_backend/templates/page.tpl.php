<header class="clearfix container" id="header-wrapper">

  <div id="top-wrapper">
    <?php if ($logo) : ?>
      <div id="logo-wrapper" class="inline-block">
        <a href="/">
          <img src="<?php print check_url($logo); ?>" alt="<?php print $site_name; ?>" id="logo" title="<?php print $site_name; ?>"/>
        </a>
      </div>
    <?php endif; ?>

    <div id="menu-wrapper" class="inline-block">
      <?php print render($main_menu); ?>
    </div><!--// menu-wrapper-->

</div><!--// top-wrapper-->

  <?php print render($page['header']); ?>

</header>

<div id="main" class="container clearfix">
  <?php print render($title_prefix); ?>
  <?php if ($title): ?>
    <h1 class="page-title"><?php print $title; ?></h1>
  <?php endif; ?>
  <?php print render($title_suffix); ?>
  <?php if ($messages) {
    print $messages;
  } ?>
  <?php print render($tabs); ?>
  <div class="element-invisible"><a id="main-content"></a></div>
  <?php if ($action_links): ?>
    <ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>
  <?php print render($page['content']); ?>
</div><!-- /main -->
<footer id="footer" class="clearfix region container">
  <?php print render($page['footer']); ?>
</footer>
