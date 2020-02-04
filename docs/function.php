function the_breadcrumb() {
    echo '<div id="breadcrumb"><ul><li><a href="/">Home</a></li><li>></li>';

    if ( is_category() || is_single() ) {
        $cats = get_the_category();
        $cat = $cats[0];
        echo '<li><a href="'.get_category_link($cat->term_id).'">'.$cat->name.'</a></li><li>></li>';
    }

    if(is_single()){
        echo '<li>';
        the_title();
        echo '</li>';
    }

    if(is_page()){
        echo '<li>';
        the_title();
        echo '</li>';
    }

    echo '</ul><div class="clear"></div></div>';
}