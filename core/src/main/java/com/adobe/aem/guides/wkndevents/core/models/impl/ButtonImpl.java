package com.adobe.aem.guides.wkndevents.core.models.impl;

import com.adobe.aem.guides.wkndevents.core.models.Button;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.day.cq.wcm.api.designer.Style;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ScriptVariable;

@Model(adaptables = SlingHttpServletRequest.class, adapters = { Button.class,
        ComponentExporter.class }, resourceType = ButtonImpl.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class ButtonImpl implements Button {

    static final String RESOURCE_TYPE = "wknd-events/components/content/button";

    static final String TEXT = "buttonText";
    static final String LINK = "buttonLink";
    static final String COLOUR = "buttonColour";
    static final String OUTLINE = "buttonOutline";
    static final String BLOCK = "buttonBlock";
    static final String SIZE = "buttonSize";

    @ScriptVariable
    private ValueMap properties;

    @ScriptVariable
    private Style currentStyle;

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }

    @Override
    public String getButtonText() {
        return properties.get(TEXT, String.class);
    }

    @Override
    public String getButtonLink() {
        return properties.get(LINK, String.class);
    }

    @Override
    public String getButtonColour() {
        return properties.get(COLOUR, String.class);
    }

    @Override
    public String getButtonSize() {
        return properties.get(SIZE, String.class);
    }

    @Override
    public Boolean getButtonOutline() {
        return properties.get(OUTLINE, Boolean.class);
    }

    @Override
    public Boolean getButtonBlock() {
        return properties.get(BLOCK, Boolean.class);
    }

}