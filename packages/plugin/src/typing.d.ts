export declare namespace PluginPage {
  type PluginCategory = 'Security' | 'Limit' | 'Log' | 'Metric' | 'Other';

  type PluginMapperItem = {
    category: PluginCategory;
    hidden?: boolean;
    name?: string;
    enabled?: boolean;
  };

  interface PluginProps extends PluginMapperItem {
    name: string;
  }

  type PluginData = { [name: string]: any };

  type DrawData = { [name: string]: any };
}
