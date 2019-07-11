package com.adobe.aem.guides.wkndevents.core.models;

import javax.annotation.Nullable;

import com.adobe.cq.export.json.ComponentExporter;

public interface Button extends ComponentExporter {

    /**
     * Button Text
     *
     * @return
     */
    @Nullable
    public String getButtonText();

    /**
     * Button Link
     *
     * @return
     */
    @Nullable
    public String getButtonLink();

    /**
     * Button Colour
     *
     * @return
     */
    @Nullable
    public String getButtonColour();

    /**
     * Button Size
     *
     * @return
     */
    @Nullable
    public String getButtonSize();

    /**
     * Button Outline
     *
     * @return
     */
    @Nullable
    public Boolean getButtonOutline();

    /**
     * Button Block
     *
     * @return
     */
    @Nullable
    public Boolean getButtonBlock();

}